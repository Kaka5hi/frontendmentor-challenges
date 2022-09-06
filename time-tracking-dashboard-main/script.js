const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
]

//We need card container so we can add the content dynamically on it
const cardsContainer = document.querySelector('.cards-container')

// Adding event listener to windom so when DOM content loads, will populate the items dynamically
window.addEventListener('DOMContentLoaded', function(){
    let cards = data.map(card => {
        return `<div class="card">
        <div class="card-info">
          <div class="card-heading">
            <h4>
              ${card.title}
            </h4>
            <div>
              <img src="./images/icon-ellipsis.svg" alt="">
            </div>
          </div>
    
          <div class="card-time">
            <div class="daily-card">
              <h2>
                <span class="current-day-time">${card.timeframes.daily.current}</span> hrs
              </h2>
              <p>
                Yesterday - <span class="last-day-time">${card.timeframes.daily.previous}</span> hrs
              </p>
            </div>
            <div class="weekly-card">
              <h2>
                <span class="current-week-time">${card.timeframes.weekly.current}</span> hrs
              </h2>
              <p>
                Last Week - <span class="last-week-time">${card.timeframes.weekly.previous}</span> hrs
              </p>
            </div>
            <div class="monthly-card">
              <h2>
                <span class="current-month-time">${card.timeframes.monthly.current}</span> hrs
              </h2>
              <p>
                Last month - <span class="last-month-time">${card.timeframes.monthly.previous}</span> hrs
              </p>
            </div>
          </div>
        </div>
      </div>`
    })
    cards = cards.join('');
    cardsContainer.innerHTML = cards;

    //Targetting all buttons
    const btns = document.querySelectorAll('button')

    //Cards
    const dailyCards = document.querySelectorAll('.daily-card')
    const weeklyCards = document.querySelectorAll('.weekly-card')
    const monthlyCards = document.querySelectorAll('.monthly-card')

    btns.forEach(function(btn) {
      btn.addEventListener('click', function(e){
        const btnClicked = e.currentTarget;

        //for daily card
        dailyCards.forEach(function(dailyCard) {
          if(btnClicked.innerHTML === 'daily') {
            dailyCard.classList.add('show-card')
          } else {
            dailyCard.classList.remove('show-card')
          }
        })

        //for weekly card
        weeklyCards.forEach(function(weeklyCard) {
          if(btnClicked.innerHTML === 'weekly') {
            weeklyCard.classList.add('show-card')
          } else {
            weeklyCard.classList.remove('show-card')
          }
        })

        //for monthly card
        monthlyCards.forEach(function(monthlyCard) {
          if(btnClicked.innerHTML === 'monthly') {
            monthlyCard.classList.add('show-card')
          } else {
            monthlyCard.classList.remove('show-card')
          }
        })

      })
    })
})
