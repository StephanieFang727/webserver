const { execSql } = require('../db/mysql')

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if(author) {
    sql += `and author='${author}' `
  }
  if(keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`  
  return execSql(sql)
  // return [
  //   {
  //     id: 1,
  //     title: '标题',
  //     content: '内容',
  //     createTime: '1557301478749',
  //     author: 'a'
  //   }
  // ]
}

const getDetail = (id) => {
  let sql = `select * from blogs where id='${id}';`
  return execSql(sql).then(arr => {
    return arr[0]
  })
}

const newBlog = (blogData={}) => {
  const { title, content, author, createtime } = blogData
  let sql = `insert into blogs (title, content, author, createtime) values ('${title}', '${content}', '${author}', '${createtime}');`
  return execSql(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  })
}

const updateBlog = (id, data) => {
  return true
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}