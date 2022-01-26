---
hide_table_of_contents: true
---

# OnPlayerSpawn

## Usage

* Called when a player is attempting to spawn for the first time
* Returning true overrides default behavior

## Examples

```csharp title=""
object OnPlayerSpawn(BasePlayer player)
{
    Puts("OnPlayerSpawn works!");
    return null;
}
```
