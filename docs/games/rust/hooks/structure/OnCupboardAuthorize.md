---
hide_table_of_contents: true
---

# OnCupboardClearList

## Usage

* Called when a cupboard attempts to authorize a player
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnCupboardAuthorize(BuildingPrivlidge privilege, BasePlayer player)
{
    Puts("OnCupboardAuthorize works!");
    return null;
}
```
