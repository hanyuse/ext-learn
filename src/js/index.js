Ext.onReady(function(){
    //核心API的使用

    /**
     * Ext.apply直接将后面的属性拷贝到第一个参数中
     * Ext.applyIf只将第一个参数没有的属性拷贝
     */
  var apply =  Ext.apply({},{name:"zhangsan",age:20});
  var applyIf = Ext.applyIf({name:"zhangsan"},{name:"lisi",age:30});
  //console.log(apply,applyIf)

  /**
   * Ext.decode是Ext.JSON.decode的简写
   * Ext.encode是Ext.JSON.encode的简写形式 编码对象
   */
  var decode = Ext.decode("{'name':'zhang','age':20}");
  // console.log(decode);
  var encode = Ext.encode(decode);
  // console.log(encode);
  var encode1 = Ext.encode([1,2,3]);
  //console.log(encode1);

  /**
   * each,回调函数中如果return false,那么会退出该迭代，如果直接return，那么只是取消本次迭代
   * 返回的值比较奇怪，如果没有return false,那么结果为true，如果return false,那么返回值为迭代到的索引号
   */
  var each = Ext.each([2,4,6,8],function(val,index){
    if(index==3)return false;
    // console.log(`${val}--${index}`);
  })
  // console.log(each);


  /**
   * Ext.fly和Ext.apply的区别
   * Ext.fly每次调用都是使用的一个内存，所以不能将其保存在变量中，因为再次调用Ext.fly可能dom的指向已经发生了改变，如果只是对dom元素的简单操作可以使用该方法
   * Ext.get每次调用都会建立独立的Ext.Element对象，这个比较耗内存，如果多次使用可以使用该方法
   * 
   */
  var root1 = Ext.fly("root");
  var root2 = Ext.fly("root2");
  root1.setHTML("hello world");//实际上这是的root1已经指向了id为root2的dom元素
  // console.log(root1==root2);
  // console.log(root2.getHTML());


  /**
   * Ext.getBody()和Ext.getDoc()直接封装了body和document的Ext Element获取快捷方式
   * Ext.getDom( String/HTMLElement/Ext.Element) 直接获取到DOM元素
   * Ext.id(HTMLElement/Ext.Element el)为元素生成唯一的id,return生成的id
   */
  //console.log(Ext.getBody());
  //console.log(Ext.getDoc())
  //console.log(Ext.getDom("root"));
  //console.log(Ext.getDom(Ext.fly("root")));  
  //Ext.id(Ext.getBody())
  Ext.id(document.querySelector(".root2"));

  /**
   * Ext.isEmpty( Object value, Boolean allowEmptyString)判断传入的值是否为空 null,undefined,[],"" 返回真,如果第二个参数为true那么可以为"";
   */
  // console.log(Ext.isEmpty({})); //false
  // console.log(Ext.isEmpty(null)); //true
  // console.log(Ext.isEmpty("")); //true
  // console.log(Ext.isEmpty(undefined)); //true
  // console.log(Ext.isEmpty("",true)); //false
  // console.log(Ext.isEmpty(0)); //false
  
  /**
   * Ext.Number.from(value,defaultValue);将value转换成number如果无法转换则返回defaultValue;
   * 
   */
  // console.log(Ext.Number.from("123",2));
  // console.log(Ext.Number.from("12.3a","nihao"));
  
  /**
   * Ext.query查找HTMLElement数组
   * Ext.select 返回Ext.dom.CompositeElement对象 可以对集合进行统一的操作（不是数组）
   */
  //console.log(Ext.query(".root2"));
  //console.log(Ext.select("div"));

})
