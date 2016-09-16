
--创建学生系统数据库
create database stusys character set utf8;
--在数据库下创建学生表
use stusys

--创建表
create table classInfo(
  cid int primary key auto_increment,
  cname varchar(100) not null unique,
  status int
);

--修改自增的起始值
alter table classInfo auto_increment=1001;

--创建学生信息表
create table stuInfo(
  sid int primary key auto_increment,
  sname varchar(100) not null,
  cid int,
  sex varchar(4),
  age int,
  pwd varchar(100),
  tel varchar(15)
);

--修改学生自增值
alter table stuInfo auto_increment=10001;

--添加班级的初始数据
insert into classInfo values(0,"YC24",1);
insert into classInfo values(0,"YC23",1);
insert into classInfo values(0,"YC25",1);

--添加学生的初始数据
insert into stuInfo values(0,"天天",1001,"男",20,"tt","10212518427");



