var LAYOUT = {
    keys: [
        [
            { key: "<math><mfrac><mi>x</mi><mi>y</mi></mfrac></math>", 
                mathml: "<mfrac><mi>x</mi><mi>y</mi></mfrac>",
                tex: "\\frac{ }{ }"
            },
            { key: "<math><mo>÷</mo></math>", 
                mathml: "<mo>÷</mo>", 
                tex: "\\div"
            },
            { key: "<math><msub><mi>x</mi><mi>y</mi></msub></math>", 
                mathml: "<msub><mi>x</mi><mi>y</mi></msub>",
                tex: "{ }_{ }"
            },
            { key: "<math><msubsup><mi>x</mi><mi>y</mi><mi>z</mi></msubsup></math>", 
                mathml: "<msubsup><mi>x</mi><mi>y</mi><mi>z</mi></msubsup>",
                tex: "{ }_{ }^{ }"
            },
            { key: "<math><msup><mi>x</mi><mi>y</mi></msup></math>", 
                mathml: "<msup><mi>x</mi><mi>y</mi></msup>",
                tex: "{ }^{ }"
            }
        ],
        [
            { key: "<math><msqrt><mi>x</mi></msqrt></math>", 
                mathml: "<msqrt><mi>x</mi></msqt>",
                tex: "\\sqrt{ }"
            },
            { key: "<math><mroot><mi>x</mi><mi>y</mi></mroot></math>", 
                mathml: "<mroot><mi>x</mi><mi>y</mi></mroot>",
                tex: "\\sqrt[ ]{ }"
            },
            { key: "<math><munder><mi>x</mi><mi>y</mi></munder></math>", 
                mathml: "<munder><mi>x</mi><mi>y</mi></munder>",
                tex: "\\underset{ }{ }"
            },
            { key: "<math><munderover><mi>x</mi><mi>y</mi><mi>z</mi></munderover></math>", 
                mathml: "<munderover><mi>x</mi><mi>y</mi><mi>z</mi></munderover>",
                tex: "\\underset{ }{\\overset{ }{ }}"
            },
            { key: "<math><mover><mi>x</mi><mi>y</mi></mover></math>", 
                mathml: "<mover><mi>x</mi><mi>y</mi></mover>",
                tex: "\\overset{ }{ }"
            }
        ]
    ]
}
