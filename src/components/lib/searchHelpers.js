export const movieTitles =(list) =>{

    var titles = list.map((title) =>{
        return title
     });

    var final = titles
    return final
}


export const rightOverview =(title, size) =>{ 

      if(title.overview && title.overview.length>= size && title.backdrop_path != null){
        return title
      }

      return "we skip too short overview"

     }
