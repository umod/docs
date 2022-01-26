---
hide_table_of_contents: true
---

# OnItemRemove

## Usage

* Called before an item is destroyed
* Return a non-null value stop item from being destroyed

## Examples

```csharp title=""
// Example that stops item from being destroyed

object OnItemRemove(Item item)
{
    Puts("OnItemRemove works!");
    return null;
}
```

```csharp title=""
// Example that does not stop item from being destroyed

void OnItemRemove(Item item)
{
    Puts("OnItemRemove works!");
}
```
