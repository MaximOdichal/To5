<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>

<p align="center">Лабораторная работа №1 "JS" </p>

<p align="right">Выполнил: Алексеев Максим Максимович</p>
<p align="right">Проверил: Соболев Е. И.</p>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">Лабораторная работа по созданию скриптов на языке JavaScript.</p>

<h2>Цели и задачи</h2>
Сделать много чего.
<h2>Решение задач</h2>


```javascript
  
function func1()
{
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    alert(`FIO: ${user.name} | ${user.surname}`);
    user.name = "Pete";
    alert(`FIO: ${user.name} | ${user.surname}`);
    delete user.name;
    alert(`FIO: ${user.name} | ${user.surname}`);
}

function func2()
{
    let schedule = {};
    alert( isEmpty(schedule) ); // true
    schedule["8:30"] = "get up";
    alert( isEmpty(schedule) ); // false
}

function isEmpty(obj)
{
    return Object.keys(obj).length == 0;
}

function func3()
{
    const user = {
        name: "John"
    };
    user.name = "Pete";
    alert(user.name);
}

function func4()
{
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      };
    let sum = 0;
    if (isEmpty(salaries)) {
        alert(0);
        return;
    }
    for(const i in salaries)
    {
        sum += salaries[i];
    }
    alert(sum);
}

function func5()
{
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };
      
    multiplyNumeric(menu);
      
    alert(`menu = {\n width = ${menu.width}\n height = ${menu.height}\n title = ${menu.title}\n}`);
}

function multiplyNumeric(obj)
{
    for(const i in obj)
    {
       if (typeof obj[i] == "number") obj[i] *= 2; 
    }
        
}

function func6()
{
    let fruits = ["Яблоки", "Груша", "Апельсин"];

    let shoppingCart = fruits;
    shoppingCart.push("Банан");

    alert( fruits.length ); // ?

}

function func7()
{
    const styles = ["Джаз","Блюз"];
    alert(styles);
    styles.push("Рок-н-ролл");
    alert(styles);
    styles.splice(Math.floor(styles.length / 2), 1, "Классика" );
    alert(styles);
    alert("Удален: " + styles.shift());
    alert(styles);
    styles.splice(0, 0, "Рэп", "Регги");
    alert(styles);
}

function func8()
{
    let arr = ["a", "b"];
    arr.push(function() {
    alert( this );
    })
    arr[2]();
}

function func9()
{
    sumInput();
}

function sumInput()
{
    const array = [];

    while(true)
    {
        var input = prompt("Введите число либо 'Отмена'");
        if (input == undefined || input == "Отмена")
            break;
        else
            array.push(parseInt(input));
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++)
        sum += array[i];

    alert(sum);
}

function func10()
{
    alert(getMaxSubSum([-1, 2, 3, -9]))//  = 5 
    alert(getMaxSubSum([2, -1, 2, 3, -9])) // = 6
    alert(getMaxSubSum([-1, 2, 3, -9, 11])) // = 11
    alert(getMaxSubSum([-2, -1, 1, 2])) // = 3
    alert(getMaxSubSum([100, -9, 2, -3, 5])) // = 100
    alert(getMaxSubSum([1, 2, 3])) // = 6 
    alert(getMaxSubSum([-1, -2, -3])) //= 0


}

function getMaxSubSum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(currentSum + arr[i], arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    if (maxSum < 0) return 0;
    return maxSum;
  }

function func11()
{
    const array = [1, 1, 2, 3 ,4 ,5, 6, 6, 7 ,6 ,8, 6, 8]; // 1 1 2 3 4 5 7 8 8
    const result = [];
    for (let i = 0; i < array.length; i++)
    {
        let count = 0;
        if (result.indexOf(array[i]) != -1) continue;

        for(let j = 0; j < array.length; j++)
        {
            if (array[i] == array[j])
                {
                    count++;
                    if (count > 2)
                    {
                        result.push(array[i]);
                        break;
                    }
                }
        }
    }

    for(let i = 0; i < result.length; i++)
    {
        for(let j = 0; j < array.length; j++)
        {
            if(array[j] == result[i])
            {
               array.splice(j, 1);
               j--;
            }
        }
    }


    alert(array);
}

function func12()
{
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let maxOdd = -Infinity;
    let maxOddIndex = -1;

    // Находим наибольший нечетный элемент и его индекс 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] > maxOdd) {
        maxOdd = arr[i];
        maxOddIndex = i;
        }
    }

    // Циклический сдвиг влево элементов справа от максимального нечетного элемента
    for (let i = maxOddIndex + 1; i < arr.length; i++) {
        const temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }

    // Циклический сдвиг вправо элементов слево от максимального нечетного элемента
    for (let i = maxOddIndex - 1; i >= 0; i--) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }

    return arr;
}

function func13()
{
    const array = [-1, 2, 3, -2 , 4, -4, -10, -3]; // -20
    let sum = 0;
    for(let i = 0; i < array.length; i++)
    {
        if (array[i] < 0) sum += array[i];
    }
    alert(sum);
}

function func14()
{
    const array = [1, 2, 3, 4, 5, 6, 7]; // 105
    let result = 1;
    for (let i = 0; i < array.length; i++)
    {
        if(i % 2 == 1) result *= array[i];
    }
    alert(result);
}

function func15()
{
    const array = [1, 2, 0, 5, 5, 5, 5, 0, 1, 2, 3]; // 20
    let result = 0;
    let i = 0;
    let flag = false;
    if(array.indexOf(0) == - 1) {
        alert(0);
        return;
    }
    for(let i = array.indexOf(0) + 1; i < array.length; i++)
    {
        result += array[i];
        if(array[i] == 0)
        {
            alert(result);
            return;
        }
    }
    alert(0);
}

function func16()
{
    const array = [1, 52, 1020, 1241, 5, 4444, 124]; // 4444
    let max = array[0];
    for(let i = 0; i < array.length; i++)
    {
        if (max < array[i]) max = array[i];
    }
    alert(max);
}

function func17()
{
    let array = [122, 52, 1020, 1241, 5, 4444, 124]; // 52
    let min = array[0];
    for(let i = 0; i < array.length; i++)
    {
        if(min > array[i] && (i + 1) % 2 == 0) min = array[i];
    }
    alert(min);
}

function func18()
{
    let array = [0, 2, 3, 0, 0, 1, 2, 0, 33, 4, 0];
    let indexNull = 0;
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] == 0)
        {
            let temp = array[indexNull];
            array[indexNull] = 0;
            array[i] = temp;
            indexNull++;
        }
    }
    alert(array);
}

function func19()
{
    let array = [1, 2, 3, 4, 5, 0, 4, 3, 2, 1];// 4 + 5
    let min = 0;
    let max = 0;
    for(let i = 0; i < array.length; i++)
    {
        if (array[max] < array[i]) max = i;
        if (array[min] > array[i]) min = i;
    }
    alert(max + min);
}

function func20()
{
    let array = [10, -2, 4, -20, 2, 4, 15]; // -2
    let min = array[0];
    for(let i = 0; i < array.length; i++)
    {
        if(Math.abs(min) > Math.abs(array[i])) min = array[i];
    }
    alert(min);
}

function func21()
{
    let array = [];
    for(let i = 0; i < 10; i++)
        array.push(Math.floor(Math.random() * 10 - Math.random() * 10));

    let array1 = array.slice(0, 5).reverse();
    let array2 = array.slice(5, 10).reverse();
    alert(array);
    alert(array1.concat(array2));
}   

function func22()
{
    let array = [];
    for(let i = 0; i < 12; i++)
        array.push(Math.floor(Math.random() * 12 - Math.random() * 12));
    
    alert(array);
    for(let i = 0; i < 4; i++) array.unshift(array.pop());
    alert(array);
}

```

<h2>Вывод</h2>
Я научился скрипты JS.
