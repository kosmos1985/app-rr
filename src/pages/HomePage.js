import React from 'react';
import Article from '../components/Article';

const articles=[
    {
    id:1,
    title:"Czym jest teoria strun",
    author:"Jan Nowak",
    text: "Reprehenderit voluptate dolore enim sit amet ea. Magna minim enim quis irure exercitation culpa culpa minim. Aliqua aliquip Lorem ea occaecat anim enim consequat culpa. Sit nostrud veniam nisi cupidatat incididunt. Qui proident tempor commodo culpa aute."
    },
    {
    id:2,
    title:"Co się robi a co nie?",
    author:"Nieznany",
    text: "222222Reprehenderit voluptate dolore enim sit amet ea. Magna minim enim quis irure exercitation culpa culpa minim. Aliqua aliquip Lorem ea occaecat anim enim consequat culpa. Sit nostrud veniam nisi cupidatat incididunt. Qui proident tempor commodo culpa aute."
    },
    {
    id:3,
    title:"Czemu tak a potem nie?",
    author:"Gustafffff Megusta",
    text: "333333Reprehenderit voluptate dolore enim sit amet ea. Magna minim enim quis irure exercitation culpa culpa minim. Aliqua aliquip Lorem ea occaecat anim enim consequat culpa. Sit nostrud veniam nisi cupidatat incididunt. Qui proident tempor commodo culpa aute."
    },
]
const HomePage = () => {
    const artList= articles.map(article =>(
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;