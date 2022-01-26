---
hide_table_of_contents: true
---

# CanHelicopterTarget

## Usage

* Called when a patrol helicopter attempts to target a player to attack
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanHelicopterTarget(PatrolHelicopterAI heli, BasePlayer player)
{
    Puts("CanHelicopterTarget works!");
    return true;
}
```
