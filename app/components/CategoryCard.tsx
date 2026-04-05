export default function CategoryCard({ title } : {title: string}) 
{
return (
<div className="bg-white p-4 rounded shadow text-center hover:bg-green-50">
    {title}
    </div>
  );
}