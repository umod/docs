---
hide_table_of_contents: true
---

# OnCupboardDeauthorize

## Usage

* Called when a cupboard attempts to deauthorize a player
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnCupboardDeauthorize(BuildingPrivlidge privilege, BasePlayer player)
{
    Puts("OnCupboardDeauthorize works!");
    return null;
}
```
