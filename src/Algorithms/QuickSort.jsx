export function QuickSort(array) {
    let animations = [];
    let low = 0;
    let high = array.length-1;
    sort(array, low, high, animations);
    return animations;
}

function sort(array, low, high, animations)
{
    if(low<high)
    {
        let p = partition(array, low, high, animations);
        sort(array, low, p-1, animations);
        sort(array, p+1, high, animations);
    }
}

function partition(array, low, high, animations)
{
    let pivot = array[high];
    let i=low-1, j=low;

    while(j<high)
    {
        animations.push([j,high,{color:1}]);
        animations.push([j,high,{color:2}]);

        if(array[j]<pivot)
        {
            i++;
            animations.push([i,array[j],{color:0}]);
            animations.push([j,array[i],{color:0}]);
            let temp = array[j];
            array[j]=array[i];
            array[i]=temp;
        }
        j++;
    }
    animations.push([i+1,high,{color:1}]);
    animations.push([i+1,high,{color:2}]);

    animations.push([i+1,pivot,{color:0}]);
    animations.push([high,array[i+1],{color:0}]);
    let temp = array[j];
    array[j]=array[i+1];
    array[i+1]=temp; 
    return i+1;
}