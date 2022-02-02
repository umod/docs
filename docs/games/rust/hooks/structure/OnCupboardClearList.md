---
hide_table_of_contents: true
---

# OnCupboardClearList

## Usage

* Called when an attempt is made to clear a cupboard authorized list
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnCupboardClearList(BuildingPrivlidge privilege, BasePlayer player)
{
    Puts("OnCupboardClearList works!");
    return null;
}
```
