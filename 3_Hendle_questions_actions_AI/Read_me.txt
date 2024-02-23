

can hendle 8 responses


this AI if fired when the AI_2 says that the question is design and not subjective or other


This AI will hendle -
    All questions -
        /

        1    What: These questions seek information about something or someone.
            
        2    Why: These questions aim to understand the reason or cause behind something.
            
        3    Where: These questions inquire about a specific location or place.
            
        4    When: These questions focus on a specific time or period.
            
        5    Who: These questions inquire about a person or group of people.
            
        6    Which: These questions ask for a choice among options.
            
        7    Whose: These questions ask about possession or ownership.
            
        8    Yes and No:

        9    Open-Ended:

        10   MCQs:

        11   Rhethorical: is it possible to make a spaceship

        12   Calrification: can you clarify what you mean

        13   Comparative: how is this better then the other one



in the natural lib, need to make these changes - 

    in the file clasifiers.js in the clasifiers, in naturals in lib in natural in node_modules

    change textToFeatures with this -

    function textToFeatures (observation) {
      const features = []

        if (typeof observation === 'string') {
            observation = observation.split(' '); // Split the input into words
            observation = observation.map(word => PorterStemmer.stem(word)); // Stem each word
        }

        for (const feature in this.features) {
            if (observation.indexOf(feature) > -1) { features.push(1) } else { features.push(0) }
        }

        return features
    }

    