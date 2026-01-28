$content = Get-Content "d:\PROJETOS\antigravity\antigravity-portfolio\index.html" -Raw
$content = $content -replace '<h1 class="hero-title">\s+Olá, meu nome é\s+Tiago Rossini\s+</h1>', '<h2 class="hero-title">
                        Olá, meu nome é<br>
                        <span class="name-highlight">Tiago Rossini</span>
                    </h2>'
$content | Set-Content "d:\PROJETOS\antigravity\antigravity-portfolio\index.html" -NoNewline
