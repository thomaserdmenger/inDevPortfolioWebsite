const hiddenItemOne = document.getElementById('feature__header-one')
const triggerBoxOne = document.getElementById('feature-box-one')
const hiddenItemTwo = document.getElementById('feature__header-two')
const triggerBoxTwo = document.getElementById('feature-box-two')
const hiddenItemThree = document.getElementById('feature__header-three')
const triggerBoxThree = document.getElementById('feature-box-three')
const hiddenItemFour = document.getElementById('feature__header-four')
const triggerBoxFour = document.getElementById('feature-box-four')

const showFeatureOne = () => {
  hiddenItemOne.style.display = 'flex'
}
const showFeatureTwo = () => {
  hiddenItemTwo.style.display = 'flex'
}
const showFeatureThree = () => {
  hiddenItemThree.style.display = 'flex'
}
const showFeatureFour = () => {
  hiddenItemFour.style.display = 'flex'
}

const hideFeatureOne = () => {
  hiddenItemOne.style.display = 'none'
}
const hideFeatureTwo = () => {
  hiddenItemTwo.style.display = 'none'
}
const hideFeatureThree = () => {
  hiddenItemThree.style.display = 'none'
}
const hideFeatureFour = () => {
  hiddenItemFour.style.display = 'none'
}

triggerBoxOne.addEventListener('mouseover', showFeatureOne)
triggerBoxOne.addEventListener('mouseout', hideFeatureOne)
triggerBoxTwo.addEventListener('mouseover', showFeatureTwo)
triggerBoxTwo.addEventListener('mouseout', hideFeatureTwo)
triggerBoxThree.addEventListener('mouseover', showFeatureThree)
triggerBoxThree.addEventListener('mouseout', hideFeatureThree)
triggerBoxFour.addEventListener('mouseover', showFeatureFour)
triggerBoxFour.addEventListener('mouseout', hideFeatureFour)
