import React from "react";
import './Start.css'

import ReactAudioPlayer from 'react-audio-player';

//On crée notre fonction fléchée avec les paramètres/Props envoyer dans App.js
const Start = ({ onStartQuiz, onSetTypeDeQuiz, Quiz, onEntierAleatoire, KanaQuiz }) => {



    //Notre fonction Lance le Quiz avec les Hiragana
    //On vas dire a TypeDeQuiz dans App.Js On utilise le quiz hiragana
    //On Change le Step pour lancer le Quiz
    const LancementQuizHiragana = () => {
        onSetTypeDeQuiz(Quiz.data.Hiragana)
        onStartQuiz()
    }


    //Notre fonction Lance le Quiz avec les Katakana
    //On vas dire a TypeDeQuiz dans App.Js On utilise le quiz Katakana
    //On Change le Step pour lancer le Quiz
    const LancementQuizKatakana = () => {
        onSetTypeDeQuiz(Quiz.data.Katakana)
        onStartQuiz()
    }

    const allKana = () => {
        onSetTypeDeQuiz(KanaQuiz[onEntierAleatoire(1, 0)])
        onStartQuiz()
    }



    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="white">Commencer le Quiz</h1>
                    <p>Bonne chance mon gaw</p>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizHiragana}>All Hiragana</button>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizKatakana}>Tous les Kana</button>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizKatakana}>All Katakana</button>
<<<<<<< HEAD

=======
                    <ReactAudioPlayer
  src="../../data/Ching-chong.mp3"
  autoPlay="true"
  controls
/>
>>>>>>> parent of 361306d (Musique lourd ça mère)
                </div>
            </div>
        </div>
    )
}

export default Start;

