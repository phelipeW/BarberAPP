## Configuração do ambiente

### Instalações MAC

Instale o homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

após a instalação do homebrew é necessário adiciona-lo ao zprofile com o comando

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/USERNAME/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```
* _troque o USERNAME para o usuário do sistema_

Com o homebrew podemos instalar o node:

```bash
brew install node@16
```

adicione o node ao zsh
```bash
echo 'export PATH="/opt/homebrew/opt/node@16/bin:$PATH"' >> ~/.zshrc
```

reinicie o terminal

instale o yarn
```bash
brew install yarn
```

instale o expo CLI globalmente

```bash
yarn global add expo-cli
```

Na loja da apple procure e instale o xcode 13

para habilitar os emuladores de iPhone execute o comando:

```bash
sudo xcodebuild -license
```

aceite o contrato escrevendo `agree` no terminal.

### Extensões VSCode

- Editor Config
- ESLint
- Expo Tools
- Git Lens
- Prettier
- Prettier ESLint

## Iniciando

### Clone do Azure Devops

execute o comando:

```
git clone URL_PROJETO
```

Será solicitado um usuário e senha então entre no painel do azure clique em clone, e abaixo da URL_PROJETO clique em Generate Git Credentials.

Utilize a credencial gerada para logar no terminal.

### Após baixar o código

Execute o comand `yarn` para instalar os pacotes necessários para a aplicação.

Para iniciar o projeto execute:

`yarn start`

Caso o navegador não abra automaticamente, no terminal pressione `d` para abrir o Expo Dev Tools

Após a abertura do Expo Dev Tools selecione o CONNECTION = Tunnel

Será gerado um novo QR code, com seu usuário expo logado em seu dispositivo/emulador acesse o app.

## Testes

### Comandos úteis

Para printar o conteúdo de um componente use:

```typescript
const { debug } = render(<Component />);
debug();
```

Para deixar o console monitorando alterações nos testes use:

```bash
yarn dev --watchAll
```
