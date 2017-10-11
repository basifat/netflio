import {movieTitles, rightOverview} from './searchHelpers'

test('movieTitles should return each movie from a list', () =>{

    const startList =[
        {id:1 , original_title: 'one', vote_average :2, overview:"The first movie object" , backdrop_path: "search/multi.png"},
        {id:2 , original_title: 'two', vote_average :4, overview:"The second movie object", backdrop_path: "search/multi1.png" },
        {id:3 , original_title: 'three', vote_average :6, overview:"The third movie object", backdrop_path: "search/multi2.png" }
        ]

    const expected = [
        {id:1 , original_title: 'one', vote_average :2, overview:"The first movie object" , backdrop_path: "search/multi.png"},
        {id:2 , original_title: 'two', vote_average :4, overview:"The second movie object", backdrop_path: "search/multi1.png" },
        {id:3 , original_title: 'three', vote_average :6, overview:"The third movie object", backdrop_path: "search/multi2.png" }
        ]

    const result = movieTitles(startList)
    expect(result).toEqual(expected)


})




test('rightOverview should return each movie from a list', () =>{

    const startList =[
        
        {id:3 , original_title: 'three', vote_average :6, overview:"The third movie object", backdrop_path: "search/multi2.png" },
        {id:1 , original_title: 'one', vote_average :2, overview:"The first" , backdrop_path: "search/multi.png"},
        {id:2 , original_title: 'two', vote_average :4, overview:"The second ", backdrop_path: "search/multi1.png" }
        ]

    var expected = [
        {id:3 , original_title: 'three', vote_average :6, overview:"The third movie object", backdrop_path: "search/multi2.png" }
        ]

    var overviewLength = 14;
    const startTitle = startList[1]
    expected = expected[0]
    const result = rightOverview(startTitle, overviewLength)
    expect(result).toEqual(expected)


})