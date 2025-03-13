INSERT INTO public.player (id,"name") VALUES
	 ('a26054a3-7b9d-41a8-9284-17a37a4cbe08'::uuid,'ivans'),
	 ('6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid,'jaz'),
	 ('565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid,'ivan'),
	 ('7a811440-42b1-4dbb-9e9b-5d7b3c2e0bb2'::uuid,'jazmin'),
	 ('40d81a0b-3bbd-4c93-8889-43d1f4ca6b55'::uuid,'thea'),
	 ('4427044f-4237-4cb5-a19f-bb009ac83b33'::uuid,'james'),
	 ('ca44d1eb-fd9b-4578-b2ce-1293c7c3f31c'::uuid,'edd'),
	 ('6afdca5c-a83a-4451-84b9-eb722dac7123'::uuid,'tim'),
	 ('7f36bee2-90bc-4a6e-b7dc-81fccdbe66e6'::uuid,'laura'),
	 ('bf8b23de-2dc8-4d74-a205-fed9d0d6885f'::uuid,'carla');
INSERT INTO public.player (id,"name") VALUES
	 ('aba88958-9998-4423-a122-54a2d3cf3106'::uuid,'paul'),
	 ('ca607977-1e5d-43b1-98fd-560dd0f30512'::uuid,'owen'),
	 ('0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid,'becca');

INSERT INTO public.round (id,created_at,winner_id) VALUES
	 ('ee45ed12-a623-40a3-a257-8cd6bff5aee3'::uuid,'2025-03-11 09:40:14.861284-06','6afdca5c-a83a-4451-84b9-eb722dac7123'::uuid),
	 ('91caae93-4e96-446b-b727-6fbd05bf8046'::uuid,'2025-03-11 09:56:09.553641-06','6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('020594d2-8011-4a67-a462-b0af223d35fe'::uuid,'2025-03-11 11:06:10.358573-06','bf8b23de-2dc8-4d74-a205-fed9d0d6885f'::uuid),
	 ('4aa7cbae-4622-401a-a2b7-caff3d155aa8'::uuid,'2025-03-11 18:47:19.085183-06','565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('83a2e9ca-dd85-4395-88ec-2f699149fdfb'::uuid,'2025-03-11 19:07:03.899644-06','565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('e510ba21-286d-4683-a9fd-f9a33057b2f4'::uuid,'2025-03-12 16:41:21.393883-06','aba88958-9998-4423-a122-54a2d3cf3106'::uuid),
	 ('55a11ed1-d34c-45f0-8781-9f8b0e25c0e2'::uuid,'2025-03-12 20:05:50.907952-06','565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('051f0fdf-6e34-42f7-9092-c52dd18e9f17'::uuid,'2025-03-12 20:08:04.424443-06','40d81a0b-3bbd-4c93-8889-43d1f4ca6b55'::uuid),
	 ('d3533cac-3f88-4133-96da-b38d2e500173'::uuid,'2025-03-12 20:09:44.109225-06','565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('f1f5922d-863f-4747-9b15-d5a4a3e7ccd8'::uuid,'2025-03-12 20:09:50.212724-06','565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid);
INSERT INTO public.round (id,created_at,winner_id) VALUES
	 ('d66775ac-d728-4568-abec-8c408431b044'::uuid,'2025-03-12 20:09:55.737435-06','565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('c4a67292-eee4-44a9-9983-c4cebb74546a'::uuid,'2025-03-12 20:10:03.925484-06','565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('79972a1f-a0f8-4cf3-9462-a938851e9fc6'::uuid,'2025-03-12 20:10:17.478084-06','4427044f-4237-4cb5-a19f-bb009ac83b33'::uuid),
	 ('aae4fb68-8899-4e6c-9210-bbbf83ea485b'::uuid,'2025-03-12 20:10:31.121575-06','4427044f-4237-4cb5-a19f-bb009ac83b33'::uuid),
	 ('37648f9f-c91f-421c-a8d8-15839200f39c'::uuid,'2025-03-12 20:13:53.375808-06','aba88958-9998-4423-a122-54a2d3cf3106'::uuid),
	 ('8fd97129-1394-421c-b422-360d65fadd96'::uuid,'2025-03-12 20:14:32.961321-06','0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('6270248b-87cc-4c9b-9625-8da23844dce2'::uuid,'2025-03-12 20:14:44.277144-06','6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('363af156-453a-48a6-bf89-15e6297ba071'::uuid,'2025-03-12 20:15:11.859191-06','aba88958-9998-4423-a122-54a2d3cf3106'::uuid),
	 ('da05a104-b752-49e2-82cd-e71b544740e7'::uuid,'2025-03-12 20:15:48.43362-06','40d81a0b-3bbd-4c93-8889-43d1f4ca6b55'::uuid),
	 ('1192fd63-ac0c-4f09-ae5d-9434863f2070'::uuid,'2025-03-12 20:16:12.671519-06','4427044f-4237-4cb5-a19f-bb009ac83b33'::uuid);
INSERT INTO public.round (id,created_at,winner_id) VALUES
	 ('521a821d-6a82-4425-939a-37b7def6f9e0'::uuid,'2025-03-12 20:16:23.543382-06','6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('ccbb6547-a94a-4def-b99c-0141ee54d369'::uuid,'2025-03-12 20:16:33.130112-06','6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('6f6c622b-c1c5-4d7f-8ce3-9f734fc2c83e'::uuid,'2025-03-12 20:16:52.58531-06','0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('a6dc9de1-086b-4940-9c6b-938d9436263f'::uuid,'2025-03-12 20:40:28.219789-06','565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('e11b26e0-20d6-48ff-896a-69c738990ae9'::uuid,'2025-03-12 20:40:33.881732-06','0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid);

INSERT INTO public.round_player (id,round_id,player_id) VALUES
	 ('38837755-f6a7-4dfc-8329-41622de7837f'::uuid,'ee45ed12-a623-40a3-a257-8cd6bff5aee3'::uuid,'6afdca5c-a83a-4451-84b9-eb722dac7123'::uuid),
	 ('caae49b5-1444-45e5-8d27-5b4b40d6f71a'::uuid,'91caae93-4e96-446b-b727-6fbd05bf8046'::uuid,'6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('7e5819f3-ae9b-43c0-ba1f-1f2f71f21225'::uuid,'91caae93-4e96-446b-b727-6fbd05bf8046'::uuid,'7f36bee2-90bc-4a6e-b7dc-81fccdbe66e6'::uuid),
	 ('9aefce3d-1148-49c4-b1e9-3d910757f51c'::uuid,'020594d2-8011-4a67-a462-b0af223d35fe'::uuid,'bf8b23de-2dc8-4d74-a205-fed9d0d6885f'::uuid),
	 ('788a59e1-2a08-4583-96e5-b34e802c3be0'::uuid,'4aa7cbae-4622-401a-a2b7-caff3d155aa8'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('fd3a9973-4f43-49c2-885b-b601185b6485'::uuid,'4aa7cbae-4622-401a-a2b7-caff3d155aa8'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('6b918cc6-ebc1-46e0-8182-2f112d567d3c'::uuid,'83a2e9ca-dd85-4395-88ec-2f699149fdfb'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('ab394956-8fcc-4809-8f26-b646c13f69ee'::uuid,'83a2e9ca-dd85-4395-88ec-2f699149fdfb'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('5c77829e-77b5-472b-955d-150932179b0e'::uuid,'e510ba21-286d-4683-a9fd-f9a33057b2f4'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('c8c6fbd7-3b3c-47cb-881d-75b6c807bc51'::uuid,'e510ba21-286d-4683-a9fd-f9a33057b2f4'::uuid,'aba88958-9998-4423-a122-54a2d3cf3106'::uuid);
INSERT INTO public.round_player (id,round_id,player_id) VALUES
	 ('bf5a652e-8723-41e4-b93c-c779b85dfe05'::uuid,'55a11ed1-d34c-45f0-8781-9f8b0e25c0e2'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('15c8f3d9-6822-4ff5-8d18-0f4b816ecc87'::uuid,'55a11ed1-d34c-45f0-8781-9f8b0e25c0e2'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('532a298e-891d-4aa5-aaeb-eb1455a22a22'::uuid,'051f0fdf-6e34-42f7-9092-c52dd18e9f17'::uuid,'7a811440-42b1-4dbb-9e9b-5d7b3c2e0bb2'::uuid),
	 ('86e1d1a9-0042-4d6b-bd08-3661c26dc2e9'::uuid,'051f0fdf-6e34-42f7-9092-c52dd18e9f17'::uuid,'40d81a0b-3bbd-4c93-8889-43d1f4ca6b55'::uuid),
	 ('3a7f84e5-26b2-4ccf-a5e5-b6ad346259c1'::uuid,'d3533cac-3f88-4133-96da-b38d2e500173'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('f1bc5693-5bfd-4683-8beb-15b25be35154'::uuid,'d3533cac-3f88-4133-96da-b38d2e500173'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('f3df9a70-6521-4653-952a-9de063bd0580'::uuid,'f1f5922d-863f-4747-9b15-d5a4a3e7ccd8'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('ec0da0cd-4e7b-488b-8552-04a199d1a89d'::uuid,'f1f5922d-863f-4747-9b15-d5a4a3e7ccd8'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('6703414d-3abf-406b-b1e8-b2034bf26e85'::uuid,'d66775ac-d728-4568-abec-8c408431b044'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('e1ea7581-d1eb-4a37-a585-44728ee16ecb'::uuid,'d66775ac-d728-4568-abec-8c408431b044'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid);
INSERT INTO public.round_player (id,round_id,player_id) VALUES
	 ('bec75db9-f18d-4996-8624-9149a2763d95'::uuid,'c4a67292-eee4-44a9-9983-c4cebb74546a'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('ae37abc6-cbcd-4c10-a6b8-535db892f0b8'::uuid,'c4a67292-eee4-44a9-9983-c4cebb74546a'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('bb9c68fc-ba6e-4d85-8891-a3cb70712136'::uuid,'79972a1f-a0f8-4cf3-9462-a938851e9fc6'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('6ff0a3c8-42fd-40c5-a7cf-b01ed98e00ac'::uuid,'79972a1f-a0f8-4cf3-9462-a938851e9fc6'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('e39a8e2d-2ab3-49a2-826c-573c9621ea7b'::uuid,'79972a1f-a0f8-4cf3-9462-a938851e9fc6'::uuid,'4427044f-4237-4cb5-a19f-bb009ac83b33'::uuid),
	 ('b8fc23a9-e1e7-4707-a7dd-1c8509c6677c'::uuid,'aae4fb68-8899-4e6c-9210-bbbf83ea485b'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('0f18ee6f-c850-48c5-8316-4e96e3e89aff'::uuid,'aae4fb68-8899-4e6c-9210-bbbf83ea485b'::uuid,'4427044f-4237-4cb5-a19f-bb009ac83b33'::uuid),
	 ('cd4dfe0c-33a3-4c7a-ad30-58040a3e8613'::uuid,'37648f9f-c91f-421c-a8d8-15839200f39c'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('88ee8969-9e3b-4e8e-9617-2b3bcdae74bf'::uuid,'37648f9f-c91f-421c-a8d8-15839200f39c'::uuid,'ca607977-1e5d-43b1-98fd-560dd0f30512'::uuid),
	 ('c16a618d-8bc9-41d7-a461-d48beb7f52d7'::uuid,'37648f9f-c91f-421c-a8d8-15839200f39c'::uuid,'aba88958-9998-4423-a122-54a2d3cf3106'::uuid);
INSERT INTO public.round_player (id,round_id,player_id) VALUES
	 ('0ea91d81-8ee2-4dfe-b155-6cc5abfc7388'::uuid,'37648f9f-c91f-421c-a8d8-15839200f39c'::uuid,'6afdca5c-a83a-4451-84b9-eb722dac7123'::uuid),
	 ('9dece181-7e6b-409d-803c-51d995690b95'::uuid,'8fd97129-1394-421c-b422-360d65fadd96'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('6fdecfe1-79e9-4e3d-b082-b90e65b64a6b'::uuid,'8fd97129-1394-421c-b422-360d65fadd96'::uuid,'6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('b2746802-5bf2-4da6-abd9-998b59914e55'::uuid,'8fd97129-1394-421c-b422-360d65fadd96'::uuid,'6afdca5c-a83a-4451-84b9-eb722dac7123'::uuid),
	 ('a9dd55c1-6007-4c07-bc8a-24626d8ba0bf'::uuid,'6270248b-87cc-4c9b-9625-8da23844dce2'::uuid,'6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('31bf23e4-9053-4e53-8b36-b8917c2ce212'::uuid,'6270248b-87cc-4c9b-9625-8da23844dce2'::uuid,'6afdca5c-a83a-4451-84b9-eb722dac7123'::uuid),
	 ('c06bbce6-d94f-4afa-809d-543b58d55e11'::uuid,'363af156-453a-48a6-bf89-15e6297ba071'::uuid,'6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('3375adaa-f16b-484d-95c2-1d6e6e8acb32'::uuid,'363af156-453a-48a6-bf89-15e6297ba071'::uuid,'aba88958-9998-4423-a122-54a2d3cf3106'::uuid),
	 ('c14ed965-56e9-44a8-b3c5-5f36a4f3ea93'::uuid,'363af156-453a-48a6-bf89-15e6297ba071'::uuid,'4427044f-4237-4cb5-a19f-bb009ac83b33'::uuid),
	 ('e66f78da-9834-4620-8581-631e46ef95b3'::uuid,'da05a104-b752-49e2-82cd-e71b544740e7'::uuid,'6afdca5c-a83a-4451-84b9-eb722dac7123'::uuid);
INSERT INTO public.round_player (id,round_id,player_id) VALUES
	 ('49341f36-78b5-47cd-9c46-49d35eafc689'::uuid,'da05a104-b752-49e2-82cd-e71b544740e7'::uuid,'40d81a0b-3bbd-4c93-8889-43d1f4ca6b55'::uuid),
	 ('c95b2d90-58b1-4085-9873-0c1f3095fc73'::uuid,'1192fd63-ac0c-4f09-ae5d-9434863f2070'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('6ea1a795-6be1-44fc-82c3-fd4b994e3545'::uuid,'1192fd63-ac0c-4f09-ae5d-9434863f2070'::uuid,'4427044f-4237-4cb5-a19f-bb009ac83b33'::uuid),
	 ('a80470c3-2397-430c-bf00-7ea91c3bae2d'::uuid,'1192fd63-ac0c-4f09-ae5d-9434863f2070'::uuid,'6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('f059fa17-3ed8-409b-b1eb-908e1fc848a7'::uuid,'521a821d-6a82-4425-939a-37b7def6f9e0'::uuid,'4427044f-4237-4cb5-a19f-bb009ac83b33'::uuid),
	 ('ce719d01-0f47-4454-acc1-ac75b2d101c4'::uuid,'521a821d-6a82-4425-939a-37b7def6f9e0'::uuid,'6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('8d80e195-73c9-41ed-ab17-dc7e9b7288fe'::uuid,'ccbb6547-a94a-4def-b99c-0141ee54d369'::uuid,'4427044f-4237-4cb5-a19f-bb009ac83b33'::uuid),
	 ('e4a5e5a1-9b2c-4397-a8a8-da17b9200e7d'::uuid,'ccbb6547-a94a-4def-b99c-0141ee54d369'::uuid,'6c77b5e4-d198-4cd4-aeab-6c92633c84f5'::uuid),
	 ('2c2d50a4-546c-4408-a545-cb9eff8a1dee'::uuid,'6f6c622b-c1c5-4d7f-8ce3-9f734fc2c83e'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('4fd9ae50-4682-4afc-a994-d8ad5e8832c5'::uuid,'6f6c622b-c1c5-4d7f-8ce3-9f734fc2c83e'::uuid,'bf8b23de-2dc8-4d74-a205-fed9d0d6885f'::uuid);
INSERT INTO public.round_player (id,round_id,player_id) VALUES
	 ('512d748e-0fc6-41d0-9cfb-8fff2baccf46'::uuid,'a6dc9de1-086b-4940-9c6b-938d9436263f'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('f6793566-00d9-4561-9312-4fbcadf4e94a'::uuid,'a6dc9de1-086b-4940-9c6b-938d9436263f'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid),
	 ('b43c26f1-f1ae-44c8-928a-79df3d6f2e82'::uuid,'e11b26e0-20d6-48ff-896a-69c738990ae9'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('7b421030-3c6c-4326-b3f6-3413d9ad31b1'::uuid,'e11b26e0-20d6-48ff-896a-69c738990ae9'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid);

INSERT INTO public.tea_user (id,"name","password") VALUES
	 ('1ed75d23-9884-434a-aa92-556deed16db3'::uuid,'Ivan','pass1122');

INSERT INTO public.user_player (id,user_id,player_id) VALUES
	 ('81505ea6-a4cf-4713-a5d2-5cfa64413f10'::uuid,'1ed75d23-9884-434a-aa92-556deed16db3'::uuid,'565713ef-5a0c-4a03-8cbb-2e53889079c4'::uuid),
	 ('5f04fc6c-0336-44c7-a2d4-481fa4d8205e'::uuid,'1ed75d23-9884-434a-aa92-556deed16db3'::uuid,'0a7e2294-7bfe-4638-939f-35ee8fcb936e'::uuid);
