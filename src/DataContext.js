import { useState, useEffect, useContext } from "react";
import axios from 'axios'
import React from 'react'
const DataContext = React.createContext();

export function UseData() {
    return useContext(DataContext)
}

export const DataProvider = ({children}) => {
    const [stories, setStories] = useState()
    const [products, setProducts] = useState()
    useEffect(() => {
        getStory()
        getProduct()
        return () => {
        }
    }, [])

    var getStory = () => {
        axios.get("http://localhost:3307/story").then((res, rej) => {
            if (res) {
                setStories(res.data)
                
            } else {
                console.log(rej);
                return
            }
        })
    }
    var getProduct = () => {
        axios.get("http://localhost:3307/products").then((res, rej) => {
            if (res) {
                setProducts(res.data)
                //console.log(res);
            } else {
                console.log(rej);
                return
            }
        })
    }
    const value = {
        stories,
        products,
    }
    console.log(stories);
    return (

        <DataContext.Provider value = {value}>
            {children}
        </DataContext.Provider>
    )

    }