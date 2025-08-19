# Strudel Sample Pack Template

This repository serves as a blank template to create your own Strudel sample packs.

## How it works

- Fork this repository to start your own sample pack.
- Create a new branch with the name of your sample pack.
- Add your samples into folders.
- The repository includes a GitHub Action that automatically generates a strudel.json file containing all your samples.
- Once the workflow runs, strudel.json is auto-committed to your repository and is ready to be used in Strudel.

The JSON file reflects the folder structure of your samples, so Strudel can serve them directly in your session.

## How to load samples

The format is
```
samples('github:<user>/<repo>/<branch>')
```

Refer to strudel's doc for more info about samples https://strudel.cc/learn/samples/

## About branches on this repository

I’ll be adding my own samples to this repository.
Each branch contains a different pack—feel free to browse them and use any samples in your own creations.

## Troubleshooting

- If strudel.json is not generated, check the Actions tab in GitHub for any workflow errors.
- If you find an error you can’t fix, open an issue on this repository and it will be addressed promptly.
