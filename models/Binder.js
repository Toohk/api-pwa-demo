const mongoose = require('mongoose');

const binderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 50,
    },
    description: {
        type: String,
        max: 255,
    },
    folder:{
        type: String,
        required: true,
        max: 50,
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
        forecast:{
            quantitative_sales:{
                tabs:[
                    {
                        market_id:{
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'markets'
                        },
                        line:[
                            {
                                volume:{
                                    type: Number,
                                },
                                price:{
                                    type: Number,
                                }
                            }
                        ]
                    }
                ]
            },
            grade_sales:{
                tabs:[
                    {
                        market_id:{
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'markets'
                        },
                    },
                    {
                        question:[
                            {
                                item:{
                                    type: String,
                                    required: true
                                }
                            }
                        ]
                    },
                    {
                        line:[
                            {
                                score:{
                                    type: Number,
                                },
                            }
                        ]
                    }
                ]
            }
        },
        achieve:{
            quantitative_sales:{
                tabs:[
                    {
                        market_id:{
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'markets'
                        },
                        line:[
                            {
                                volume:{
                                    type: Number,
                                },
                                price:{
                                    type: Number,
                                }
                            }
                        ]
                    }
                ]
            },
        }
    },

});

module.exports = mongoose.model('Binder', binderSchema);