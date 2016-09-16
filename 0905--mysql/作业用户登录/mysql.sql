--创建用户系统数据库
create database user character set utf8;
--在数据库下创建学生表
use user;
--创建表
create table usersInfo(
    uid int primary key auto_increment,
    uname varchar(100) not null,
    sex varchar(4),
    age int,
    pwd varchar(100)
);
--查询语句
show databases;
select *from usersInfo;
show columns from usersInfo;
--修改自增的起始值
alter table usersInfo auto_increment=1601;

--添加用户的初始数据
insert into usersInfo values(0,"a","男",20,"a");

alter table usersInfo modify pwd varchar(100) after uname;




