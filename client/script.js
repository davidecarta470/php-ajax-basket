const app = new Vue({
  el:'#app',
  data:{
    logoAndMatches: [],
    apiUrl:'http://localhost/php-ajax-basket/server/index.php?',
    cities:[],
    logo:'',
    onlyMatches:[]
  },
  methods:{
    getApi(url){
      axios.get(url).then(r=>{
        this.logoAndMatches=r.data;
        
        this.partLogoAndMetches(this.logoAndMatches)
      })
      .catch(e=>{
        console.log('errore------->>>',e)
      })
    },
      
        
     
    getCity(){
      nameCity = "city="+event.originalTarget.value;
      newUrl = this.apiUrl+nameCity
      this.getApi(newUrl)
    },


    partLogoAndMetches(array){
      this.onlyMatches=[]
      array.forEach(el => {
        if('nbaLogo' in el) {
          this.logo=el.nbaLogo
        }else{
          this.onlyMatches.push(el)
        }
      });
      this.onlyMatches.forEach(el => {
        if(!this.cities.includes(el.city)){
        this.cities.push(el.city)
        } 
      });
    } 

      
  },
  mounted(){
    this.getApi(this.apiUrl)
  }

  })
      
      
        
      


