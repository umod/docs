---
hide_table_of_contents: true
---

# OnTrapTrigger

## Usage

* Called when a trap is triggered by a game object
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTrapTrigger(BaseTrap trap, GameObject gameObject)
{
    Puts("OnTrapTrigger works!");
    return null;
}
```

```csharp title=""
object OnTrapTrigger(BearTrap trap, GameObject gameObject)
{
    Puts("OnTrapTrigger works!");
    return null;
}
```

```csharp title=""
object OnTrapTrigger(Landmine landmine, GameObject gameObject)
{
    Puts("OnTrapTrigger works!");
    return null;
}
```
