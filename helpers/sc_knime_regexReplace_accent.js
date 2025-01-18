regexReplace(
    regexReplace(
        regexReplace(
            regexReplace(
                regexReplace(
                    regexReplace(
                        regexReplace(
                            regexReplace(
                                regexReplace(
                                    regexReplace(
                                        regexReplace(
                                            regexReplace(
                                                regexReplace(
                                                    regexReplace(
                                                        regexReplace($$CURRENTCOLUMN$$, "[ÀÁÂÄ]", "A"),
                                                        "[àáâä]", "a"),
                                                    "[ÈÉÊË]", "E"),
                                                "[èéêë]", "e"),
                                            "[ÌÍÎÏ]", "I"),
                                        "[ìíîï]", "i"),
                                    "[ÒÓÔÖ]", "O"),
                                "[òóôö]", "o"),
                            "[ÙÚÛÜ]", "U"),
                        "[ùúûü]", "u"),
                    "[ÝŸ]", "Y"),
                "[ýÿ]", "y"),
            "[Ç]", "C"),
        "[ç]", "c"),
    "[_&]", " ")
