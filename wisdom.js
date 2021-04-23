const natureProtection =[
    '“Plans to protect air and water, wilderness and wildlife are in fact plans to protect man.” —Stewart Udall', 
    '“It is our collective and individual responsibility … to preserve and tend to the world in which we all live.” —Dalai Lama',
    '“If you are fearful of the destruction of the environment, then learn to quit being an environmental parasite.” —Wendell Berry',
    '“You cannot protect the environment unless you empower people, you inform them, and you help them understand that these resources are their own, that they must protect them.” —Wangari Maathai',
    '“Stop fighting about who created the world and start fighting against the people who are trying to destroy it!”',
    '“The environment and the economy are really both two sides of the same coin. If we cannot sustain the environment, we cannot sustain ourselves.” —Wangari Maathai'
];
const helpOthers = [
    '“The best way to find yourself is to lose yourself in the service of others.”git log — Mahatma Gandhi',
    '“As you grow older, you will discover that you have two hands — one for helping yourself, the other for helping others.” ― Audrey Hepburn',
    '“How wonderful it is that nobody need wait a single moment before starting to improve the world.” ― Anne Frank',
    '“If you think you are too small to be effective, you have never been in bed with a mosquito.” ― Betty Reese',
    '“At the end of the day it’s not about what you have or even what you’ve accomplished… it’s about who you’ve lifted up, who you’ve made better. It’s about what you’ve given back.” ― Denzel Washington',
    '“A kind gesture can reach a wound that only compassion can heal.”# ― Steve Maraboli'
];

const piceOfMind = [
    '“Love and peace of mind do protect us. They allow us to overcome the problems that life hands us. They teach us to survive… to live now… to have the courage to confront each day.” —Bernie Siegel',
    '“You’ll never find peace of mind until you listen to your heart.” —George Michael',
    '“Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.” —Wayne W. Dye',
    '“Peace is a daily, a weekly, a monthly process, gradually changing opinions, slowly eroding old barriers, quietly building new structures.” —John F. Kennedy',
    '“Never be in a hurry; do everything quietly and in a calm spirit. Do not lose your inner peace for anything whatsoever, even if your whole world seems upset.” —Saint Francis de Sales',
    '“If you knew your potential to feel good, you would ask no one to be different so that you can feel good. You would free yourself of all of that cumbersome impossibility of needing to control the world, or control your mate, or control your child. You are the only one who creates your reality. For no one else can think for you, no one else can do it. It is only you, every bit of it you.” ― Esther Hicks'
];
const i = Math.floor(Math.random() * 3);
const j = Math.floor(Math.random() * 6);
const wisdom = [natureProtection, helpOthers, piceOfMind];
function randomWisdom (){
    console.log(wisdom[i][j]);
}
randomWisdom()