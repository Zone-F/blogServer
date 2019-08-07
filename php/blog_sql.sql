/*
分类表，每个分类下有多个标签
*/
CREATE TABLE `blog_type`(
  `id` int(11) unsigned NOT NULL auto_increment,
  `name` VARCHAR(20) NOT NULL ,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB default charset=utf8;

-- 标签表
CREATE TABLE `blog_tags`(
  `id` int(11) unsigned NOT NULL auto_increment,
  `name` VARCHAR(20) NOT NULL ,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB default charset=utf8;

/*
分类--标签(中间表)
*/
CREATE TABLE `trailer_movies_tags`(
  `id` int(11) unsigned NOT NULL auto_increment,
  `typeid` int(11) unsigned NOT NULL ,
  `tagid` int(11) unsigned NOT NULL ,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB default charset=utf8;

-- 文章表
CREATE TABLE `article`(
  `id` int(11) unsigned NOT NULL auto_increment,
  `title` VARCHAR(50) NOT NULL,
  `content` text(255) NOT NULL,
  `type` int(10), 
  `create` datetime ,
  `updata` datetime ,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB default charset=utf8;

-- 文章--标签表(中间表)
CREATE TABLE `article_tags`(
  `id` int(11) unsigned NOT NULL auto_increment,
  `aid` int(11) unsigned NOT NULL ,
  `tid` int(11) unsigned NOT NULL ,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB default charset=utf8;

-- #用户表
-- CREATE TABLE `user`(
--   `id` int(11) unsigned NOT NULL auto_increment,
--   `username` VARCHAR(50) NOT NULL,
--   `password` VARCHAR(50) NOT NULL,
--   PRIMARY KEY (`id`)
-- )ENGINE=InnoDB default charset=utf8;
