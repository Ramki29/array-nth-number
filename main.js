let array=[45,6,7,3,-2,74];
let n=parseInt(prompt("Enter the nth element"));
function nSmall(array,n)
	{
	for(i=0; i<array.length; i++)
		{
		for(j=i+1; j<array.length; j++)
			{
			if(array[i]>array[j])
				{
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
				}
			}
			console.log(array);
		}
		let small=array[n-1];
		return small;
	}
	console.log(nSmall(array,n));