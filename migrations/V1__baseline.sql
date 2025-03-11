create table tea_user
(
    id        uuid not null primary key,
    name        text not null,
    password      text not null
);

create table player
(
    id        uuid not null primary key,
    name        text not null
);

create table user_player
(
    id          uuid not null primary key,
    user_id   uuid not null,
    player_id   uuid not null
);

create table round
(
    id          uuid not null primary key,
    created_at  timestamp with time zone default now() not null,
    winner_id   uuid not null
);

create table round_player
(
    id          uuid not null primary key,
    round_id   uuid not null,
    player_id   uuid not null
);
