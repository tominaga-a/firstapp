module.exports = (req,res) => {
  const post = "これはコントローラーで定義した変数を確認するための文字列です";
  res.render("posts/allPosts",{post});
/*viewは自動読み取りされるため省略可 */
};