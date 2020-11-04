var app = new Vue({
  el: '#app',
  data: {
    Newitem: '',
    msgs: [],
  },
  watch: {
    msgs: function(){
      localStorage.setItem('msgs',JSON.stringify(this.msgs));
    }

  },
  mounted: function(){
this.msgs = JSON.parse(localStorage.getItem('msgs'));
  },
  methods: {
    additem: function(){
      this.msgs.push(this.Newitem);
      this.Newitem='';
    },
    deleteitem: function(index){
      if(confirm('コメントを削除してもよろしいですか？')){
        this.msgs.splice(index,1);
       }
    },

    scrollToEnd(){
      var container = document. querySelector('.scroll');
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    }   
  },
  
 updated(){
   this.scrollToEnd();
 }

 
});
