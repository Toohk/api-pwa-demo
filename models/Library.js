const mongoose = require('mongoose');

const LibrarySchema = new mongoose.Schema({

    user:{
        type: String,
        required: true,
        max: 255,
    },
    folders:[
        {
            name: {
                type: String,
                required: true,
                max: 50,
            },
            binders:[
                {
                    name: {
                        type: String,
                        required: true,
                        max: 50,
                    },
                    description: {
                        type: String,
                        max: 255,
                    },
                    markets:[
                        {
                            name: {
                                type: String,
                                required: true,
                                max: 50,
                            },
                        }
                    ],
                    charges:[
                        {
                            name: {
                                type: String,
                                required: true,
                                max: 50,
                            },
                        }
                    ],
                    questions:[
                        {
                            question: {
                                type: String,
                                required: true,
                            },
                        }
                    ],
                    tables:{
                        quantitative_sales:{
                            forecast:{
                                tabs:[
                                    {
                                        market_id:{
                                           
                                        },
                                        lines:[
                                            {
                                                volume:{
                                                    
                                                },
                                                price:{
                                                    
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            achieve:{
                                tabs:[
                                    {
                                        market_id:{
                                            
                                        },
                                        lines:[
                                            {
                                                volume:{
                                                   
                                                },
                                                price:{
                                                    
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                            
                        },
                        grade_sales:{
                            tabs:[
                                {
                                    market_id:{
                                        type: mongoose.Schema.Types.ObjectId,
                                        ref: 'markets'
                                    },
                                    question:[
                                        {
                                            item:{
                                                type: String,
                                                required: true
                                            }
                                        }
                                    ],
                                    lines:[
                                        {
                                            score:{
                                                type: Number,
                                            },
                                        }
                                    ]
                                }
                            ]
                        } 
                    }
                }
            ]  
        }
    ]
});

module.exports = mongoose.model('Library', LibrarySchema);