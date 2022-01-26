---
hide_table_of_contents: true
---

# OnThreatLevelUpdate

## Usage

* Called when a player's threat level is about to be updated
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnThreatLevelUpdate(BasePlayer player)
{
    Puts("OnThreatLevelUpdate works!");
    return null;
}
```
