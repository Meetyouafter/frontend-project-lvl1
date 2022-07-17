install: #для первого клонирования репозитария
	npm ci

brain-games: #для запуска игры
	node bin/brain-games.js

publish: #очистка общего хранилища от учебных проектов
	npm publish --dry-run

lint: #запуск линтера
	npx eslint

brain-even: 
	node bin/brain-even.js

brain-calc: 
	node bin/brain-calc.js

brain-gsd: 
	node bin/brain-gcd.js

brain-prime:
	node bin/brain-prime.js

brain-progression: 
	node bin/brain-progression.js