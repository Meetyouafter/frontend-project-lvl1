install: #для первого клонирования репозитария
	npm ci

brain-games: #для запуска игры
	node bin/brain-games.js

publish: #очистка общего хранилища от учебных проектов
	npm publish --dry-run

lint: #запуск линтера
	npx eslint

brain-even: 
	node bin/brainEven.js

brain-calc: 
	node bin/brainCalc.js

brain-gsd: 
	node bin/brainGcd.js

brain-prime:
	node bin/brainPrime.js

brain-progression: 
	node bin/brainProgression.js