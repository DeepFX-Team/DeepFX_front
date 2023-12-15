## Project Intro.

- This project is web site that provide Converting text to soundFX service
- We use ML Model based on riffusion fine tuned by serveral soundFXs
    
    [https://github.com/riffusion/riffusion](https://github.com/riffusion/riffusion)
    

## Project Structure

![DeepFX_TechStacks drawio (2)](https://user-images.githubusercontent.com/74547868/217707984-b3949df0-262e-4409-acfc-83092953d704.png)

## How To Use

1. Pull all Repositorys down below
    - [https://github.com/DeepFX-Team/DeepFX_ModelServer](https://github.com/DeepFX-Team/DeepFX_ModelServer)
    - [https://github.com/DeepFX-Team/riffusion](https://github.com/DeepFX-Team/riffusion)
    - [https://github.com/DeepFX-Team/DeepFX_front](https://github.com/DeepFX-Team/DeepFX_front)
2. Run
    - Run riffusion Server
        
        ```python
        #Config Python Interpreter
        conda create --name riffusion python=3.9
        conda activate riffusion
        
        #Install Dependency
        python -m pip install -r requirements.txt
        
        #If use other audio format rather than wav
        sudo apt-get install ffmpeg          # linux
        brew install ffmpeg                  # mac
        conda install -c conda-forge ffmpeg  # conda
        
        #Install CUDA or MPS(Mac OS)
        import torch
        torch.cuda.is_available()
        
        import torch
        torch.backends.mps.is_available()
        
        #Run Server
        python -m riffusion.server --host 127.0.0.1 --port 3013
        ```
        
    - Run ModelServer
        
        ```python
        python -m flask run
        ```
        
    - Run React front
        
        ```python
        npm install
        npm start
        ```
        
    
    ## Tech Specs
    
    [https://docs.google.com/document/d/1qotuIHmA7SG-tmzc72LIyeCAGMo8daNc/edit?usp=sharing&ouid=107720925454306190388&rtpof=true&sd=true](https://docs.google.com/document/d/1qotuIHmA7SG-tmzc72LIyeCAGMo8daNc/edit?usp=sharing&ouid=107720925454306190388&rtpof=true&sd=true)
    
    ## Contributers
    
    - [https://github.com/jha2ee](https://github.com/jha2ee)
        - Train Riffusion Model
    - [https://github.com/xongjaemin](https://github.com/xongjaemin)
        - Front-End
    - [https://github.com/destiny3912](https://github.com/destiny3912)
        - Back-End
