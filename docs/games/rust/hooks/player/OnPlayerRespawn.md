---
hide_table_of_contents: true
---

# OnPlayerRespawn

## Usage

* Called when a player is attempting to respawn
* Returning a BasePlayer.SpawnPoint (takes a position and rotation) overrides the respawn location
* Returning a SleepingBag overrides the respawn location.

## Examples

```csharp title=""
object OnPlayerRespawn(BasePlayer player)
{
    Puts("OnPlayerRespawn works!");
    return null;
}
```
