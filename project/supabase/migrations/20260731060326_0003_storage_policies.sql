/*
# Storage policies for avatars bucket

## Overview
The `avatars` storage bucket is public (so avatar images can be displayed
without signed URLs). These policies allow any authenticated user to upload
their own avatar, and anyone to read avatars.

## Policies
- SELECT (read): public — anyone can view avatars.
- INSERT (upload): authenticated users can upload to a path that starts
  with their own user id, so a user can only write into their own folder.
- UPDATE: authenticated users can update files in their own folder.
- DELETE: authenticated users can delete files in their own folder.
*/

DROP POLICY IF EXISTS "read_avatars" ON storage.objects;
CREATE POLICY "read_avatars" ON storage.objects FOR SELECT
  TO anon, authenticated USING (bucket_id = 'avatars');

DROP POLICY IF EXISTS "upload_own_avatar" ON storage.objects;
CREATE POLICY "upload_own_avatar" ON storage.objects FOR INSERT
  TO authenticated WITH CHECK (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

DROP POLICY IF EXISTS "update_own_avatar" ON storage.objects;
CREATE POLICY "update_own_avatar" ON storage.objects FOR UPDATE
  TO authenticated USING (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = auth.uid()::text
  ) WITH CHECK (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

DROP POLICY IF EXISTS "delete_own_avatar" ON storage.objects;
CREATE POLICY "delete_own_avatar" ON storage.objects FOR DELETE
  TO authenticated USING (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );
