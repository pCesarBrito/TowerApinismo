import re

file_path = 'index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix encodings
replacements = {
    'MÃÂ“DULO_DE_OPERACÃÂ•ES': 'MÓDULO DE OPERAÇÕES',
    'MISSÃÂƒO': 'MISSÃO',
    'SOLUÃÂ‡ÃÂ•ES': 'SOLUÇÕES',
    'Ã‚©': '©',
    'VISÃÂƒO': 'VISÃO'
}
for bad, good in replacements.items():
    content = content.replace(bad, good)

# Fix whatsapp aria label
content = content.replace('aria-label="Contact via WhatsApp"', 'aria-label="Entrar em contato via WhatsApp"')

# 2. Add Meta Tags
meta_tags = """    <meta name="description" content="Especialistas em Alpinismo Industrial e Serviços em Altura. Substituímos andaimes por agilidade e segurança absoluta em qualquer cenário industrial." />
    <meta property="og:title" content="Tower Alpinismo - Serviços em Altura" />
    <meta property="og:description" content="Especialistas em Alpinismo Industrial e Serviços em Altura com segurança inegociável." />
    <meta property="og:type" content="website" />"""

if '<meta name="description"' not in content:
    content = content.replace('</title>', '</title>\n' + meta_tags)

# 3. Add loading="lazy" to portfolio images and about images
def lazy_replacer(match):
    img_tag = match.group(0)
    if 'loading=' not in img_tag and ('gallery-img' in img_tag or 'Nossa Equipe' in img_tag):
        return img_tag.replace('<img ', '<img loading="lazy" ')
    return img_tag

content = re.sub(r'<img [^>]+>', lazy_replacer, content)

# 4. Extract CSS
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if style_match:
    css_content = style_match.group(1).strip()
    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css_content)
    content = content.replace(style_match.group(0), '<link rel="stylesheet" href="style.css" />')

# 5. Extract JS
# Find the script tag that contains the custom JS (has // Hero Carousel)
script_match = re.search(r'<script>\s*// Hero Carousel(.*?)</script>', content, re.DOTALL)
if script_match:
    js_content = "// Hero Carousel" + script_match.group(1).strip()
    with open('main.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    content = content.replace(script_match.group(0), '<script src="main.js"></script>')

# 6. Add aria-labels to footer social links
# The social links are in footer, let's just find them by the svg paths
# Share icon
content = content.replace('<a href="#"\\n                            class="w-10 h-10 rounded-2xl bg-background border border-white/10',
                          '<a href="#" aria-label="Compartilhar"\\n                            class="w-10 h-10 rounded-2xl bg-background border border-white/10')
# Other a tags without aria-label inside the footer social block
social_pattern = re.compile(r'(<a href="#"\s+class="w-10 h-10[^>]+>)\s*<svg', re.DOTALL)
# It's easier to just do it manually if regex is complex, let's use a simpler replace
content = re.sub(r'<a href="#"\s*\n\s*class="w-10 h-10 rounded-2xl bg-background border border-white/10 flex items-center justify-center text-on-background/70 hover:text-white hover:bg-primary hover:border-primary transition-all">\s*<svg', 
                 '<a href="#" aria-label="Rede Social" class="w-10 h-10 rounded-2xl bg-background border border-white/10 flex items-center justify-center text-on-background/70 hover:text-white hover:bg-primary hover:border-primary transition-all"><svg', content)
content = re.sub(r'<a href="#"\s*\n\s*class="w-10 h-10 rounded-2xl bg-background border border-white/10 flex items-center justify-center text-on-background/70 hover:text-white hover:bg-primary hover:border-primary transition-all">\s*<span', 
                 '<a href="#" aria-label="Compartilhar" class="w-10 h-10 rounded-2xl bg-background border border-white/10 flex items-center justify-center text-on-background/70 hover:text-white hover:bg-primary hover:border-primary transition-all"><span', content)


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Refactoring completed successfully.")
