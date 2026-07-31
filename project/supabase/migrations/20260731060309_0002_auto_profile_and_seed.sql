/*
# Auto-create profile on signup + seed sample data

## Changes
1. **handle_new_user() trigger function** — when a new row is inserted into
   auth.users, automatically insert a matching row into `profiles` using the
   user's id and the full_name from their signup metadata. This means new
   users get a profile row automatically without the client needing to
   create one manually.

2. **Trigger** — fires AFTER INSERT on auth.users.

3. **Seed courses** — inserts a starter set of sample courses across
   different categories (Web Development, AI/ML, Data Structures, Cloud,
   Cybersecurity) so the dashboard and courses area looks alive for new
   users. All are marked published.

4. **Seed sample notifications** — not seeded here because notifications
   are user-scoped; the dashboard will show generated placeholder
   notifications when none exist yet.

## Security
- The trigger function runs with SECURITY DEFINER so it can insert into
  profiles even though the calling role (anon during signup) cannot.
- Search_path set to public for safety.
*/

-- Trigger function: auto-create profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Seed sample courses
INSERT INTO courses (title, description, category, level, duration_hours, instructor, rating, is_published)
VALUES
  ('Full-Stack Web Development with React', 'Build modern web applications using React, Node.js, and PostgreSQL. Covers hooks, routing, state management, and deployment.', 'Web Development', 'Intermediate', 40, 'Dr. Anita Sharma', 4.8, true),
  ('Machine Learning Fundamentals', 'Learn supervised and unsupervised learning, feature engineering, and model evaluation with hands-on Python projects.', 'AI / ML', 'Beginner', 35, 'Prof. Rajesh Kumar', 4.9, true),
  ('Data Structures & Algorithms Mastery', 'Comprehensive DSA course covering arrays, trees, graphs, dynamic programming, and complexity analysis for interviews.', 'Computer Science', 'Intermediate', 50, 'Dr. Priya Nair', 4.7, true),
  ('AWS Cloud Practitioner', 'Get started with cloud computing — EC2, S3, RDS, IAM, and architecture best practices on AWS.', 'Cloud Computing', 'Beginner', 28, 'Vikram Patel', 4.6, true),
  ('Ethical Hacking & Cybersecurity Essentials', 'Learn network security, vulnerability assessment, penetration testing, and security operations fundamentals.', 'Cybersecurity', 'Intermediate', 32, 'Sneha Reddy', 4.5, true),
  ('Python for Data Science', 'Master pandas, NumPy, matplotlib, and scikit-learn for data analysis, visualization, and predictive modeling.', 'Data Science', 'Beginner', 30, 'Dr. Arjun Mehta', 4.8, true),
  ('System Design for Interviews', 'Learn to design scalable systems — load balancing, caching, databases, message queues, and microservices.', 'Computer Science', 'Advanced', 25, 'Karan Malhotra', 4.9, true),
  ('DevOps with Docker & Kubernetes', 'Containerize applications and orchestrate at scale. CI/CD pipelines, Helm, and production deployment strategies.', 'DevOps', 'Advanced', 38, 'Rohit Desai', 4.7, true)
ON CONFLICT DO NOTHING;
