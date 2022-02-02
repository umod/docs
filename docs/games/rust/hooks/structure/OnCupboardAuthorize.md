---
hide_table_of_contents: true
---

# OnCupboardClearList

## Usage

* Called when a cupboard attempts to authorize a player
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnCupboardAuthorize(BuildingPrivlidge privilege, BasePlayer player)
{
    Puts("OnCupboardAuthorize works!");
    return null;
}
```
