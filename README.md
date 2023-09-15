Project: Course-registration
--------3 Project features-------
⚫ Don't copy allowed: I have make a system which will reject duplicate title. If one time a course is selected then it can not be re-selected.
⚫ Showing selected title list serialized: like the list will showing ordered from 1 to the list lenght.
⚫ Showing toast: I have used toast react notify. I used this three times. When some one will trying to take duplicate title then the toast will show. Also when some one will try to take the total credit hour greather then 20 and total credit remaining less than 0 then the toast will show.

-----how did I managed the state in my assignment project.-----
I have used 5 states in my project. The first state was about "courses" in this state I have received all courses cards data from fake json after open the page. The second state I have used for storing selected courses data. In this state will stored without duplicate title object. And the third state used for accounting total price. It will storing the total price, after every click event it will update its value depends on it previous value. I have used fourth state to storing total credit hour and increase its value after every click event. And the last state I have been used for storing and showing remaining credit hour, after every click event if the item is not duplicate then it decress the value depend on its total credit hour.













