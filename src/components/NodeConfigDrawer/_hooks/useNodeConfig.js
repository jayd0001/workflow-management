import { useState, useEffect } from 'react'

export function useNodeConfig(node) {
  const [config, setConfig] = useState(node.data.config || {})
  const [parameters, setParameters] = useState([])

  useEffect(() => {
    if (node.data.config?.parameters && typeof node.data.config.parameters === 'object') {
      const paramArray = Object.entries(node.data.config.parameters).map(([key, value]) => ({
        key,
        value: String(value),
      }))
      setParameters(paramArray.length > 0 ? paramArray : [{ key: '', value: '' }])
    } else {
      setParameters([{ key: '', value: '' }])
    }
  }, [node.data.config])

  const handleInputChange = (field, value) => {
    setConfig((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleParameterChange = (index, field, value) => {
    const newParameters = [...parameters]
    newParameters[index] = { ...newParameters[index], [field]: value }
    setParameters(newParameters)

    const paramObj = {}
    newParameters.forEach((param) => {
      if (param.key) {
        paramObj[param.key] = param.value
      }
    })

    setConfig((prev) => ({
      ...prev,
      parameters: paramObj,
    }))
  }

  const addParameter = () => {
    setParameters((prev) => [...prev, { key: '', value: '' }])
  }

  const removeParameter = (index) => {
    const newParameters = parameters.filter((_, i) => i !== index)
    setParameters(newParameters)

    const paramObj = {}
    newParameters.forEach((param) => {
      if (param.key && param.value) {
        paramObj[param.key] = param.value
      }
    })

    setConfig((prev) => ({ ...prev, parameters: paramObj }))
  }

  return {
    config,
    parameters,
    handleInputChange,
    handleParameterChange,
    addParameter,
    removeParameter,
    setConfig,
  }
}
