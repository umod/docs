---
hide_table_of_contents: true
---

# OnCodeEntered

## Usage

* Called when the player has entered a code in a codelock
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnCodeEntered(CodeLock codeLock, BasePlayer player, string code)
{
    Puts("OnCodeEntered works!");
    return null;
}
```
