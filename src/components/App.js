import React, { useState, useEffect } from 'react'

import Admin from './Admin'
import Controls from './Controls'
import Countdown from './Countdown'
import SectionList from './SectionList'
import { socket } from './socket'

import './App.css'
import data from './data'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timer, setTimer] = useState(data[0].duration)
  const [percent, setPercent] = useState(0)
  const [curSection, setCurSection] = useState(0)
  const [startTime, setStartTime] = useState(new Date())
  const [control, setControl] = useState(false)
  const [connection, setConnection] = useState("Not connected to server.")

  useEffect(() => {
    socket.on("Hello", (res) => setConnection(res + " client(s) connected to server :)"))
    socket.on("Start", (res) => startSection(res))
    socket.on("Stop", () => stop())
  }, [])
  
  useEffect(() => {
    const interval = setInterval(updateTimer, 33)
    return () => {
      clearInterval(interval)
    }
  })

  function startSection(section) {
    setTimer(data[section].duration)
    setPercent(0)
    setCurSection(section)
    setStartTime(new Date())
    setIsPlaying(true)
  }

  function stop() {
    setTimer(data[0].duration)
    setPercent(0)
    setCurSection(0)
    setStartTime(new Date())
    setIsPlaying(false)
  }

  function handleInput(event) {
    if (event.target.type === "checkbox") {
      setControl(!control)
      return
    }

    let btnSection = 0
    if (event.target.classList.contains('btn-link')) {
      btnSection = +event.target.dataset.id

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
      return;
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
      <Countdown 
        isPlaying={isPlaying} 
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
      />
      <Admin 
        control={control}
        controlHandler={handleInput}
        connection={connection} 
      />
    </>
  )
}

export default App