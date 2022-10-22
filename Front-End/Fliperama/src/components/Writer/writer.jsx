import React from 'react'
import Typewriter from 'typewriter-effect'
import './writer.css'

function Writer() {
	return (
    <div className="writer">
		<Typewriter 
			options={{
				strings: ['BEM VINDO', 'AO SIMPLES...', 'MAS FUNCIONAL'],
				autoStart: true,
				loop: true,
				deleteSpeed: 70,
			}}
		/>
    <div className="writerJapanese"> 
    <Typewriter 
			options={{
				strings: ['ウェルカム', 'シンプルなもの...', 'しかし機能的'],
				autoStart: true,
				loop: true,
				deleteSpeed: 70,
        delay: 230,
        
			}}
		/>
    </div>
    </div>
	)
}

export default Writer
