export const MergeSort = (array) =>{
    let low=0;
    let high=array.length-1;
    let animations=[];
    sort(array, low, high, animations);
    return animations;
}

function sort(array, low, high, animations)
{
    if(low<high){
        let mid = Math.floor((low+high)/2);
        sort(array, low, mid, animations);
        sort(array, mid+1, high, animations);
        merge(array, low, mid, high, animations);
    }
}

function merge(array, low, mid, high, animations)
{
    const n1 = mid-low+1;
    const n2 = high-mid;

    let left =  [];
    let right = [];

    for(let i=low;i<=mid;i++)
        left.push(array[i]);
    for(let i=mid+1;i<=high;i++)
        right.push(array[i]);
        
    let i = low, i1=0;
    let j = mid+1, j1=0;
    let k = low;

    while(i1<left.length && j1<right.length)
    {
        //push comparing elements to animations for color change
        animations.push([i,j])
        //push comparing elements to animations for color change
        animations.push([i,j])

        if(left[i1]<right[j1])
        {
            animations.push([k,left[i1]]);
            array[k++] = left[i1++];
            i++;
        }
        else{
            animations.push([k,right[j1]]);
            array[k++] = right[j1++];
            j++;
        }
    }

    while(i1<left.length)
    {
         //push comparing elements to animations for color change
         animations.push([i,i])
         //push comparing elements to animations for color change
         animations.push([i,i])

         animations.push([k,left[i1]]);
         array[k++] = left[i1++];
         i++;

    }
    while(j1<right.length)
    {
         //push comparing elements to animations for color change
         animations.push([j,j])
         //push comparing elements to animations for color change
         animations.push([j,j])

         animations.push([k,right[j1]]);
         array[k++] = right[j1++];
         j++;

    }
}