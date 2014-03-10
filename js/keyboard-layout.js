var LAYOUT = {
    keys: [
        [
            { key: "<math><mfrac><mi>x</mi><mi>y</mi></mfrac></math>", 
                mathml: "<mfrac><mi>x</mi><mi>y</mi></mfrac>",
                tex: "\\frac{x}{y}"
            },
            { key: "<math><mo>÷</mo></math>", 
                mathml: "<mo>÷</mo>", 
                tex: "\\div"
            },
            { key: "<math><msub><mi>x</mi><mi>y</mi></msub></math>", 
                mathml: "<msub><mi>x</mi><mi>y</mi></msub>",
                tex: "x_{y}"
            },
            { key: "<math><msubsup><mi>x</mi><mi>y</mi><mi>z</mi></msubsup></math>", 
                mathml: "<msubsup><mi>x</mi><mi>y</mi><mi>z</mi></msubsup>",
                tex: "x_{y}^{z}"
            },
            { key: "<math><msup><mi>x</mi><mi>y</mi></msup></math>", 
                mathml: "<msup><mi>x</mi><mi>y</mi></msup>",
                tex: "x^{y}"
            }
        ],
        [
            { key: "<math><msqrt><mi>x</mi></msqrt></math>", 
                mathml: "<msqrt><mi>x</mi></msqt>",
                tex: "\\sqrt{x}"
            },
            { key: "<math><mroot><mi>x</mi><mi>y</mi></mroot></math>", 
                mathml: "<mroot><mi>x</mi><mi>y</mi></mroot>",
                tex: "\\sqrt[y]{x}"
            },
            { key: "<math><munder><mi>x</mi><mi>y</mi></munder></math>", 
                mathml: "<munder><mi>x</mi><mi>y</mi></munder>",
                tex: "\\underset{y}{x}"
            },
            { key: "<math><munderover><mi>x</mi><mi>y</mi><mi>z</mi></munderover></math>", 
                mathml: "<munderover><mi>x</mi><mi>y</mi><mi>z</mi></munderover>",
                tex: "\\underset{y}{\\overset{z}{x}}"
            },
            { key: "<math><mover><mi>x</mi><mi>y</mi></mover></math>", 
                mathml: "<mover><mi>x</mi><mi>y</mi></mover>",
                tex: "\\overset{y}{x}"
            }
        ]
    ]
}
