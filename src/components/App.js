/**
 * Contains logic for controlling the timers, and
 * acts as a wrapper for the rest of the components
 * in the app.
 */

import React, { useState, useEffect } from 'react'

import Admin from './Admin'
import Controls from './Controls'
import Countdown from './Countdown'
import Footer from './Footer'
import Header from './Header'
import SectionList from './SectionList'
import { socket } from './socket'

import '../styles/normalize.css'
import '../styles/main.css'

import data from './data'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timer, setTimer] = useState(data[0].duration)
  const [percent, setPercent] = useState(0)
  const [curSection, setCurSection] = useState(-1)
  const [startTime, setStartTime] = useState(new Date())
  const [control, setControl] = useState(false)
  const [connection, setConnection] = useState("Not connected to server.")
  const [isSolo, setIsSolo] = useState(false);

  useEffect(() => {
    socket.on("Hello", (res) => setConnection(res + " client(s) connected to server."))
    socket.on("Start", (res) => startSection(res, true))
    socket.on("Stop", () => stop(true))
  }, [])
  
  useEffect(() => {
    const interval = setInterval(updateTimer, 33)
    return () => {
      clearInterval(interval)
    }
  })

  function startSection(section, server=false) {
    if (server) {
      if (isSolo) return
    }

    setTimer(data[section].duration)
    setPercent(0)
    setCurSection(section)
    setStartTime(new Date())
    setIsPlaying(true)
  }

  function stop(server=false) {
    if (server) {
      if (isSolo) return
    }

    setTimer(data[0].duration)
    setPercent(0)
    setCurSection(-1)
    setStartTime(new Date())
    setIsPlaying(false)
  }

  function handleInput(event) {
    if (event.target.type === "checkbox") {
      if (event.target.name === "client-control") {
        setControl(!control)
      } else if (event.target.name === "solo-control") {
        setIsSolo(!isSolo)
      }
      return
    }

    let btnSection = 0
    if (event.target.classList.contains('list-btn')) {
      btnSection = +event.target.dataset.id

      if (btnSection === curSection && isPlaying) {
        if (control) {
          socket.emit("Stop")
          return
        }

        setIsPlaying(false)
        return
      }

      if (control) {
        socket.emit("Start", btnSection)
        return
      }

      startSection(btnSection)
      return
    }

    if (control) {
      isPlaying ? socket.emit("Stop") 
                : socket.emit("Start", btnSection)
      return
    }

    isPlaying ? setIsPlaying(false)
              : startSection(btnSection)
  }

  function updateTimer() {
    if (!isPlaying || curSection >= data.length) {
      stop()
      return
    }

    const now = new Date()
    const elapsed = now - startTime
    let countdown = data[curSection].duration - (elapsed/1000)
    
    if (countdown <= 0) {
      setCurSection(curSection + 1)
      let tempTime = startTime
      tempTime.setTime(tempTime.getTime() + (data[curSection].duration * 1000))
      setStartTime(tempTime)
      countdown += data[curSection].duration
    }

    setPercent(elapsed / (data[curSection].duration * 1000))
    setTimer(countdown)
  }

  return (
    <>
      <Header />
      <h1>Annular Fusion</h1>
      <Countdown 
        isPlaying={isPlaying} 
        isSolo={isSolo}
        curSection={curSection}
        timer={timer}
        percent={percent}
      />
      <Controls 
        isPlaying={isPlaying} 
        btnHandler={handleInput} 
        control={control}
      />
      <SectionList 
        btnHandler={handleInput}
        curSection={curSection}
        isPlaying={isPlaying}
      />
      <Admin 
        control={control}
        solo={isSolo}
        controlHandler={handleInput}
        connection={connection} 
      />
      <Footer />
    </>
  )
}

export default App